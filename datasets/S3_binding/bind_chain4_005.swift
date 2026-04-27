import SwiftUI

struct Cb4005: View {
    @Binding var n: Int
    var body: some View {
        Button("b4005-leaf") { n += 1 }
    }
}

struct Bb4005: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4005-mid2: \(n)"); Cb4005(n: $n) }
    }
}

struct Ab4005: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4005-mid1: \(n)"); Bb4005(n: $n) }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("b4005-root: \(n)").font(.headline)
            Ab4005(n: $n)
        }
        .padding()
    }
}
