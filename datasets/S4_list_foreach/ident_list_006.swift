import SwiftUI

struct Rowid006: Identifiable {
    let id = UUID()
    let title: String
}

struct ContentView: View {
    let rows = [Rowid006(title: "id006-alpha"), Rowid006(title: "id006-beta"), Rowid006(title: "id006-gamma"), Rowid006(title: "id006-delta")]
    var body: some View {
        List(rows) { r in
            Text(r.title)
        }
    }
}
