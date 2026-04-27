import SwiftUI

struct Cb4008: View {
    @Binding var n: Int
    var body: some View {
        Button("b4008-leaf") { n += 1 }
    }
}

struct Bb4008: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4008-mid2: \(n)"); Cb4008(n: $n) }
    }
}

struct Ab4008: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4008-mid1: \(n)"); Bb4008(n: $n) }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("b4008-root: \(n)").font(.headline)
            Ab4008(n: $n)
        }
        .padding()
    }
}
