import SwiftUI

struct ContentView: View {
    @State private var big = false
    var body: some View {
        VStack {
            Text("as002-scale")
                .scaleEffect(big ? 1.5 : 1)
                .animation(.easeInOut, value: big)
            Button("as002-zoom") { big.toggle() }
        }
        .padding()
    }
}
