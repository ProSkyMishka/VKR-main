import SwiftUI

struct ContentView: View {
    @State private var a = false
    @State private var b = false
    var body: some View {
        VStack(spacing: 16) {
            Text("ad003-A")
                .opacity(a ? 1 : 0.3)
                .animation(.easeInOut, value: a)
            Text("ad003-B")
                .scaleEffect(b ? 1.4 : 1)
                .animation(.easeInOut, value: b)
            HStack {
                Button("ad003-toggleA") { a.toggle() }
                Button("ad003-toggleB") { b.toggle() }
            }
        }
        .padding()
    }
}
