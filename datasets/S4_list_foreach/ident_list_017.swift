import SwiftUI

struct Rowid017: Identifiable {
    let id = UUID()
    let title: String
}

struct ContentView: View {
    let rows = [Rowid017(title: "id017-alpha"), Rowid017(title: "id017-beta"), Rowid017(title: "id017-gamma"), Rowid017(title: "id017-delta")]
    var body: some View {
        List(rows) { r in
            Text(r.title)
        }
    }
}
