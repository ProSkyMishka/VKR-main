import SwiftUI

struct Pairbcm009: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("bcm009-a+") { a += 1 }
            Button("bcm009-b+") { b += 1 }
        }
    }
}

struct ContentView: View {
    @State private var a = 1
    @State private var b = 2
    var body: some View {
        VStack {
            Text("bcm009-sum: \(a + b)").font(.headline)
            Text("bcm009-pair: a=\(a) b=\(b)")
            Pairbcm009(a: $a, b: $b)
        }
        .padding()
    }
}
