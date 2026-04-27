import SwiftUI

struct Rowid016: Identifiable {
    let id = UUID()
    let title: String
}

struct ContentView: View {
    let rows = [Rowid016(title: "id016-alpha"), Rowid016(title: "id016-beta"), Rowid016(title: "id016-gamma"), Rowid016(title: "id016-delta")]
    var body: some View {
        List(rows) { r in
            Text(r.title)
        }
    }
}
