import SwiftUI

struct Rowid004: Identifiable {
    let id = UUID()
    let title: String
}

struct ContentView: View {
    let rows = [Rowid004(title: "id004-alpha"), Rowid004(title: "id004-beta"), Rowid004(title: "id004-gamma"), Rowid004(title: "id004-delta")]
    var body: some View {
        List(rows) { r in
            Text(r.title)
        }
    }
}
