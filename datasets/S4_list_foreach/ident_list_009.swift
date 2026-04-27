import SwiftUI

struct Rowid009: Identifiable {
    let id = UUID()
    let title: String
}

struct ContentView: View {
    let rows = [Rowid009(title: "id009-alpha"), Rowid009(title: "id009-beta"), Rowid009(title: "id009-gamma"), Rowid009(title: "id009-delta")]
    var body: some View {
        List(rows) { r in
            Text(r.title)
        }
    }
}
