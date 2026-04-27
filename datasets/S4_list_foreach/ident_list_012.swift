import SwiftUI

struct Rowid012: Identifiable {
    let id = UUID()
    let title: String
}

struct ContentView: View {
    let rows = [Rowid012(title: "id012-alpha"), Rowid012(title: "id012-beta"), Rowid012(title: "id012-gamma"), Rowid012(title: "id012-delta")]
    var body: some View {
        List(rows) { r in
            Text(r.title)
        }
    }
}
