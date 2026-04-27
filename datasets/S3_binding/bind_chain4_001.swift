import SwiftUI

struct Cb4001: View {
    @Binding var n: Int
    var body: some View {
        Button("b4001-leaf") { n += 1 }
    }
}

struct Bb4001: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4001-mid2: \(n)"); Cb4001(n: $n) }
    }
}

struct Ab4001: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4001-mid1: \(n)"); Bb4001(n: $n) }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("b4001-root: \(n)").font(.headline)
            Ab4001(n: $n)
        }
        .padding()
    }
}
