import SwiftUI
struct ContentView: View {
    let items: [String] = []
    var body: some View {
        List(items, id: \.self) { Text($0) }
    }
}
