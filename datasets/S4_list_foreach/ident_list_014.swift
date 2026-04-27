import SwiftUI

struct Rowid014: Identifiable {
    let id = UUID()
    let title: String
}

struct ContentView: View {
    let rows = [Rowid014(title: "id014-alpha"), Rowid014(title: "id014-beta"), Rowid014(title: "id014-gamma"), Rowid014(title: "id014-delta")]
    var body: some View {
        List(rows) { r in
            Text(r.title)
        }
    }
}
