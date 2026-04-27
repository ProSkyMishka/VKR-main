import SwiftUI

struct Rowid007: Identifiable {
    let id = UUID()
    let title: String
}

struct ContentView: View {
    let rows = [Rowid007(title: "id007-alpha"), Rowid007(title: "id007-beta"), Rowid007(title: "id007-gamma"), Rowid007(title: "id007-delta")]
    var body: some View {
        List(rows) { r in
            Text(r.title)
        }
    }
}
