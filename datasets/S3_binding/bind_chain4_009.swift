import SwiftUI

struct Cb4009: View {
    @Binding var n: Int
    var body: some View {
        Button("b4009-leaf") { n += 1 }
    }
}

struct Bb4009: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4009-mid2: \(n)"); Cb4009(n: $n) }
    }
}

struct Ab4009: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4009-mid1: \(n)"); Bb4009(n: $n) }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("b4009-root: \(n)").font(.headline)
            Ab4009(n: $n)
        }
        .padding()
    }
}
