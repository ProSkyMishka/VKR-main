import SwiftUI

struct ContentView: View {
    @State private var big = false
    var body: some View {
        VStack {
            Text("as007-scale")
                .scaleEffect(big ? 1.5 : 1)
                .animation(.easeInOut, value: big)
            Button("as007-zoom") { big.toggle() }
        }
        .padding()
    }
}
