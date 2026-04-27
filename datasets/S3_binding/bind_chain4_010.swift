import SwiftUI

struct Cb4010: View {
    @Binding var n: Int
    var body: some View {
        Button("b4010-leaf") { n += 1 }
    }
}

struct Bb4010: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4010-mid2: \(n)"); Cb4010(n: $n) }
    }
}

struct Ab4010: View {
    @Binding var n: Int
    var body: some View {
        VStack { Text("b4010-mid1: \(n)"); Bb4010(n: $n) }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("b4010-root: \(n)").font(.headline)
            Ab4010(n: $n)
        }
        .padding()
    }
}
