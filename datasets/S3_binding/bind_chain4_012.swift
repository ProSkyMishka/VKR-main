import SwiftUI

struct Cb4012: View {
    @Binding var n: Int
    var body: some View {
        Button("b4012-leaf") { n += 1 }
    }
}

struct Bb4012: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4012-mid2: \(n)"); Cb4012(n: $n) }
    }
}

struct Ab4012: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4012-mid1: \(n)"); Bb4012(n: $n) }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("b4012-root: \(n)").font(.headline)
            Ab4012(n: $n)
        }
        .padding()
    }
}
