import SwiftUI

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    @State private var c = 0

    var body: some View {
        VStack(spacing: 8) {
            Text("mc006-a: \(a)")
            Text("mc006-b: \(b)")
            Text("mc006-c: \(c)")
            HStack {
                Button("mc006-incA") { a += 1 }
                Button("mc006-incB") { b += 2 }
                Button("mc006-incC") { c += 3 }
            }
            HStack {
                Button("mc006-rstA") { a = 0 }
                Button("mc006-rstB") { b = 0 }
                Button("mc006-rstC") { c = 0 }
            }
        }
        .padding()
    }
}
