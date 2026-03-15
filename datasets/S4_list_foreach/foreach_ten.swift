import SwiftUI
struct ContentView: View {
    var body: some View {
        List(0..<10, id: \.self) { i in
            Text("Item \(i)")
        }
    }
}
