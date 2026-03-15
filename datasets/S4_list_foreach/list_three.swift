import SwiftUI
struct Item: Identifiable { let id = UUID(); let t: String }
struct ContentView: View {
    let items = [Item(t: "X"), Item(t: "Y"), Item(t: "Z")]
    var body: some View {
        List(items) { i in Text(i.t) }
    }
}
