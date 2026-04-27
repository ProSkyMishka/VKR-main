import SwiftUI

struct Rowid015: Identifiable {
    let id = UUID()
    let title: String
}

struct ContentView: View {
    let rows = [Rowid015(title: "id015-alpha"), Rowid015(title: "id015-beta"), Rowid015(title: "id015-gamma"), Rowid015(title: "id015-delta")]
    var body: some View {
        List(rows) { r in
            Text(r.title)
        }
    }
}
