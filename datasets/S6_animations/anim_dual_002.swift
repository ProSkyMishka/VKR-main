import SwiftUI

struct ContentView: View {
    @State private var a = false
    @State private var b = false
    var body: some View {
        VStack(spacing: 16) {
            Text("ad002-A")
                .opacity(a ? 1 : 0.3)
                .animation(.easeInOut, value: a)
            Text("ad002-B")
                .scaleEffect(b ? 1.4 : 1)
                .animation(.easeInOut, value: b)
            HStack {
                Button("ad002-toggleA") { a.toggle() }
                Button("ad002-toggleB") { b.toggle() }
            }
        }
        .padding()
    }
}
