import SwiftUI

struct Cb4002: View {
    @Binding var n: Int
    var body: some View {
        Button("b4002-leaf") { n += 1 }
    }
}

struct Bb4002: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4002-mid2: \(n)"); Cb4002(n: $n) }
    }
}

struct Ab4002: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4002-mid1: \(n)"); Bb4002(n: $n) }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("b4002-root: \(n)").font(.headline)
            Ab4002(n: $n)
        }
        .padding()
    }
}
