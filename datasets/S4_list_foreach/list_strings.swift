import SwiftUI
struct ContentView: View {
    let words = ["Apple", "Banana", "Cherry", "Date"]
    var body: some View {
        List(words, id: \.self) { w in Text(w) }
    }
}
