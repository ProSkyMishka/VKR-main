import SwiftUI

struct Rowid018: Identifiable {
    let id = UUID()
    let title: String
}

struct ContentView: View {
    let rows = [Rowid018(title: "id018-alpha"), Rowid018(title: "id018-beta"), Rowid018(title: "id018-gamma"), Rowid018(title: "id018-delta")]
    var body: some View {
        List(rows) { r in
            Text(r.title)
        }
    }
}
