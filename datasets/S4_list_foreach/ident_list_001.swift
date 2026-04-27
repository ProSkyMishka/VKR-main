import SwiftUI

struct Rowid001: Identifiable {
    let id = UUID()
    let title: String
}

struct ContentView: View {
    let rows = [Rowid001(title: "id001-alpha"), Rowid001(title: "id001-beta"), Rowid001(title: "id001-gamma"), Rowid001(title: "id001-delta")]
    var body: some View {
        List(rows) { r in
            Text(r.title)
        }
    }
}
