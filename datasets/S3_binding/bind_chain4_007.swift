import SwiftUI

struct Cb4007: View {
    @Binding var n: Int
    var body: some View {
        Button("b4007-leaf") { n += 1 }
    }
}

struct Bb4007: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4007-mid2: \(n)"); Cb4007(n: $n) }
    }
}

struct Ab4007: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4007-mid1: \(n)"); Bb4007(n: $n) }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("b4007-root: \(n)").font(.headline)
            Ab4007(n: $n)
        }
        .padding()
    }
}
