import SwiftUI
struct ContentView: View {
    var body: some View {
        HStack(spacing: 12) {
            Text("R").foregroundColor(.red)
            Text("G").foregroundColor(.green)
            Text("B").foregroundColor(.blue)
        }.font(.title)
    }
}
