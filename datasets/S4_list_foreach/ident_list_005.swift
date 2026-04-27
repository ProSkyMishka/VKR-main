import SwiftUI

struct Rowid005: Identifiable {
    let id = UUID()
    let title: String
}

struct ContentView: View {
    let rows = [Rowid005(title: "id005-alpha"), Rowid005(title: "id005-beta"), Rowid005(title: "id005-gamma"), Rowid005(title: "id005-delta")]
    var body: some View {
        List(rows) { r in
            Text(r.title)
        }
    }
}
