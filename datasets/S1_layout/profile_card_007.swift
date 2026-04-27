import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 10) {
            Image(systemName: "person.crop.circle.fill")
                .font(.system(size: 72))
                .foregroundColor(.blue)
            VStack(spacing: 2) {
                Text("pc007-name")
                    .font(.title2)
                    .bold()
                Text("pc007-handle")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            Text("pc007-bio short")
                .font(.subheadline)
                .multilineTextAlignment(.center)
                .padding(.horizontal)
            HStack(spacing: 24) {
                VStack { Text("pc007-posts"); Text("\(17)").bold() }
                VStack { Text("pc007-followers"); Text("\(107)").bold() }
                VStack { Text("pc007-likes"); Text("\(1007)").bold() }
            }
        }
        .padding()
    }
}
