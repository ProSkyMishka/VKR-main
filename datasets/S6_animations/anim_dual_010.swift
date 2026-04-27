import SwiftUI

struct ContentView: View {
    @State private var a = false
    @State private var b = false
    var body: some View {
        VStack(spacing: 16) {
            Text("ad010-A")
                .opacity(a ? 1 : 0.3)
                .animation(.easeInOut, value: a)
            Text("ad010-B")
                .scaleEffect(b ? 1.4 : 1)
                .animation(.easeInOut, value: b)
            HStack {
                Button("ad010-toggleA") { a.toggle() }
                Button("ad010-toggleB") { b.toggle() }
            }
        }
        .padding()
    }
}
