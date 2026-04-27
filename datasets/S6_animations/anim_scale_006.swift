import SwiftUI

struct ContentView: View {
    @State private var big = false
    var body: some View {
        VStack {
            Text("as006-scale")
                .scaleEffect(big ? 1.5 : 1)
                .animation(.easeInOut, value: big)
            Button("as006-zoom") { big.toggle() }
        }
        .padding()
    }
}
