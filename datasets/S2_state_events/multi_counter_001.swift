import SwiftUI

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    @State private var c = 0

    var body: some View {
        VStack(spacing: 8) {
            Text("mc001-a: \(a)")
            Text("mc001-b: \(b)")
            Text("mc001-c: \(c)")
            HStack {
                Button("mc001-incA") { a += 1 }
                Button("mc001-incB") { b += 2 }
                Button("mc001-incC") { c += 3 }
            }
            HStack {
                Button("mc001-rstA") { a = 0 }
                Button("mc001-rstB") { b = 0 }
                Button("mc001-rstC") { c = 0 }
            }
        }
        .padding()
    }
}
