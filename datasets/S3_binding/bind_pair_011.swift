import SwiftUI

struct ABbp011: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("bp011-Aplus") { a += 1 }
            Button("bp011-Bplus") { b += 1 }
        }
    }
}

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    var body: some View {
        VStack {
            Text("bp011-A=\(a) B=\(b)")
            ABbp011(a: $a, b: $b)
        }
        .padding()
    }
}
