import SwiftUI

struct Cb4006: View {
    @Binding var n: Int
    var body: some View {
        Button("b4006-leaf") { n += 1 }
    }
}

struct Bb4006: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4006-mid2: \(n)"); Cb4006(n: $n) }
    }
}

struct Ab4006: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4006-mid1: \(n)"); Bb4006(n: $n) }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("b4006-root: \(n)").font(.headline)
            Ab4006(n: $n)
        }
        .padding()
    }
}
