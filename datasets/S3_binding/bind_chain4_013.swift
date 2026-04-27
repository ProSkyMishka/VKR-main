import SwiftUI

struct Cb4013: View {
    @Binding var n: Int
    var body: some View {
        Button("b4013-leaf") { n += 1 }
    }
}

struct Bb4013: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4013-mid2: \(n)"); Cb4013(n: $n) }
    }
}

struct Ab4013: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4013-mid1: \(n)"); Bb4013(n: $n) }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("b4013-root: \(n)").font(.headline)
            Ab4013(n: $n)
        }
        .padding()
    }
}
