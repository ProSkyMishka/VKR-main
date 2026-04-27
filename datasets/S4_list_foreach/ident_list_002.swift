import SwiftUI

struct Rowid002: Identifiable {
    let id = UUID()
    let title: String
}

struct ContentView: View {
    let rows = [Rowid002(title: "id002-alpha"), Rowid002(title: "id002-beta"), Rowid002(title: "id002-gamma"), Rowid002(title: "id002-delta")]
    var body: some View {
        List(rows) { r in
            Text(r.title)
        }
    }
}
