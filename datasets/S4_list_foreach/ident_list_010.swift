import SwiftUI

struct Rowid010: Identifiable {
    let id = UUID()
    let title: String
}

struct ContentView: View {
    let rows = [Rowid010(title: "id010-alpha"), Rowid010(title: "id010-beta"), Rowid010(title: "id010-gamma"), Rowid010(title: "id010-delta")]
    var body: some View {
        List(rows) { r in
            Text(r.title)
        }
    }
}
