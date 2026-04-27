import SwiftUI

struct Rowid013: Identifiable {
    let id = UUID()
    let title: String
}

struct ContentView: View {
    let rows = [Rowid013(title: "id013-alpha"), Rowid013(title: "id013-beta"), Rowid013(title: "id013-gamma"), Rowid013(title: "id013-delta")]
    var body: some View {
        List(rows) { r in
            Text(r.title)
        }
    }
}
