import SwiftUI
struct R: Identifiable { let id = UUID(); let title: String }
struct ContentView: View {
    let rows = [R(title: "1"), R(title: "2")]
    var body: some View {
        List {
            Section("Main") {
                ForEach(rows) { r in Text(r.title) }
            }
        }
    }
}
