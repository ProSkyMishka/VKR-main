import SwiftUI

struct Rowid003: Identifiable {
    let id = UUID()
    let title: String
}

struct ContentView: View {
    let rows = [Rowid003(title: "id003-alpha"), Rowid003(title: "id003-beta"), Rowid003(title: "id003-gamma"), Rowid003(title: "id003-delta")]
    var body: some View {
        List(rows) { r in
            Text(r.title)
        }
    }
}
