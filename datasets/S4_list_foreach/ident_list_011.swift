import SwiftUI

struct Rowid011: Identifiable {
    let id = UUID()
    let title: String
}

struct ContentView: View {
    let rows = [Rowid011(title: "id011-alpha"), Rowid011(title: "id011-beta"), Rowid011(title: "id011-gamma"), Rowid011(title: "id011-delta")]
    var body: some View {
        List(rows) { r in
            Text(r.title)
        }
    }
}
