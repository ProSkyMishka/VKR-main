import SwiftUI

struct Rowid008: Identifiable {
    let id = UUID()
    let title: String
}

struct ContentView: View {
    let rows = [Rowid008(title: "id008-alpha"), Rowid008(title: "id008-beta"), Rowid008(title: "id008-gamma"), Rowid008(title: "id008-delta")]
    var body: some View {
        List(rows) { r in
            Text(r.title)
        }
    }
}
