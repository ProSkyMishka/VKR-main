import SwiftUI
struct RowView: View {
    let title: String
    var body: some View { Text(title) }
}
struct ContentView: View {
    let items = ["One", "Two", "Three"]
    var body: some View {
        List(items, id: \.self) { item in RowView(title: item) }
    }
}
