import SwiftUI

struct ContentView: View {
    @State private var a = false
    @State private var b = false
    var body: some View {
        VStack(spacing: 16) {
            Text("ad005-A")
                .opacity(a ? 1 : 0.3)
                .animation(.easeInOut, value: a)
            Text("ad005-B")
                .scaleEffect(b ? 1.4 : 1)
                .animation(.easeInOut, value: b)
            HStack {
                Button("ad005-toggleA") { a.toggle() }
                Button("ad005-toggleB") { b.toggle() }
            }
        }
        .padding()
    }
}
