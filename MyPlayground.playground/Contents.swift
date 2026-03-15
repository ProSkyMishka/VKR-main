import UIKit

class DeeplinkPatternMatcher(patterns: Set<String>) {
    private val rootNode = buildTrie(patterns)

    fun matches(url: String): Boolean {
        val path = extractPath(url)
        val segments = path.split("/")
        return matchSegments(rootNode, segments, index = 0)
    }

    private fun matchSegments(node: MatchNode, segments: List<String>, index: Int): Boolean {
        if (index == segments.size) {
            return node.terminal || node.nodes.containsKey("*")
        }

        val chunk = segments[index]

        node.nodes[chunk]?.let {
            if (matchSegments(it, segments, index + 1)) return true
        }
        if (chunk.isNotEmpty()) {
            node.nodes["#"]?.let {
                if (matchSegments(it, segments, index + 1)) return true
            }
        }
        if (node.nodes.containsKey("*")) return true

        return false
    }

    private data class MatchNode(
        val nodes: MutableMap<String, MatchNode> = HashMap(),
        var terminal: Boolean = false,
    )

    companion object {
        private fun buildTrie(patterns: Set<String>): MatchNode {
            val root = MatchNode()
            for (pattern in patterns) {
                var current = root
                val segments = pattern.split("/")
                for (segment in segments) {
                    val key = if (segment.startsWith(":")) "#" else segment
                    current = current.nodes.getOrPut(key) { MatchNode() }
                }
                current.terminal = true
            }
            return root
        }

        private fun extractPath(url: String): String {
            val withoutQuery = url.substringBefore("?").substringBefore("#")
            val schemeEnd = withoutQuery.indexOf("://")
            if (schemeEnd == -1) return withoutQuery
            val afterScheme = withoutQuery.substring(schemeEnd + 3)
            val slashIdx = afterScheme.indexOf('/')
            return if (slashIdx == -1) {
                afterScheme
            } else if (afterScheme.substringBefore('/').contains('.')) {
                afterScheme.substring(slashIdx)
            } else {
                afterScheme
            }
        }
    }
}
