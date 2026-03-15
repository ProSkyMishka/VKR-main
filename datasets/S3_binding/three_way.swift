import SwiftUI
struct ABView: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("A") { a += 1 }
            Button("B") { b += 1 }
        }
    }
}
struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    var body: some View {
        VStack {
            Text("a=\(a) b=\(b)")
            ABView(a: $a, b: $b)
        }
    }
}
