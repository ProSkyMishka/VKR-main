import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(0..<7, id: \.self) { k in
                Text("fs003-row \(k)")
            }
        }
    }
}
