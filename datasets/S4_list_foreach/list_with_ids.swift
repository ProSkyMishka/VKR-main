import SwiftUI
struct M: Identifiable { let id: Int; let name: String }
struct ContentView: View {
    let data = [M(id: 1, name: "A"), M(id: 2, name: "B")]
    var body: some View {
        List(data) { d in Text(d.name) }
    }
}
