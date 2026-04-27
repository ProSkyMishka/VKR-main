import SwiftUI

struct Cb4004: View {
    @Binding var n: Int
    var body: some View {
        Button("b4004-leaf") { n += 1 }
    }
}

struct Bb4004: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4004-mid2: \(n)"); Cb4004(n: $n) }
    }
}

struct Ab4004: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4004-mid1: \(n)"); Bb4004(n: $n) }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("b4004-root: \(n)").font(.headline)
            Ab4004(n: $n)
        }
        .padding()
    }
}
