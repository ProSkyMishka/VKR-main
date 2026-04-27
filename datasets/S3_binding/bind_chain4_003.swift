import SwiftUI

struct Cb4003: View {
    @Binding var n: Int
    var body: some View {
        Button("b4003-leaf") { n += 1 }
    }
}

struct Bb4003: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4003-mid2: \(n)"); Cb4003(n: $n) }
    }
}

struct Ab4003: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4003-mid1: \(n)"); Bb4003(n: $n) }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("b4003-root: \(n)").font(.headline)
            Ab4003(n: $n)
        }
        .padding()
    }
}
