import SwiftUI

struct Cb4011: View {
    @Binding var n: Int
    var body: some View {
        Button("b4011-leaf") { n += 1 }
    }
}

struct Bb4011: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4011-mid2: \(n)"); Cb4011(n: $n) }
    }
}

struct Ab4011: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4011-mid1: \(n)"); Bb4011(n: $n) }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("b4011-root: \(n)").font(.headline)
            Ab4011(n: $n)
        }
        .padding()
    }
}
