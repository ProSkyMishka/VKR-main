import SwiftUI
struct ContentView: View {
    let count = 7
    var body: some View {
        List(0..<count, id: \.self) { i in
            Text("Row \(i + 1)")
        }
    }
}
